import { Accessibility } from '@fluentui/accessibility'
import * as customPropTypes from '@fluentui/react-proptypes'
import * as React from 'react'
import * as PropTypes from 'prop-types'

import { WithAsProp, ShorthandValue, withSafeTypeForAs } from '../../types'
import {
  childrenExist,
  createShorthandFactory,
  RenderResultConfig,
  UIComponent,
  UIComponentProps,
  ChildrenComponentProps,
  commonPropTypes,
  rtlTextContainer,
  ShorthandFactory,
} from '../../utils'
import Box, { BoxProps } from '../Box/Box'

import { ComponentSlotStylesResolved } from '@fluentui/styles'

export interface ChatItemSlotClassNames {
  message: string
  gutter: string
}

export interface ChatItemProps extends UIComponentProps, ChildrenComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: Accessibility

  /** Controls item's relation to other chat items. */
  attached?: boolean | 'top' | 'bottom'

  /** Chat items can have a gutter. */
  gutter?: ShorthandValue<BoxProps>

  /** Indicates whether the content is positioned at the start or the end. */
  contentPosition?: 'start' | 'end'

  /** Chat items can have a message. */
  message?: ShorthandValue<BoxProps>
}

class ChatItem extends UIComponent<WithAsProp<ChatItemProps>, any> {
  static className = 'ui-chat__item'
  static create: ShorthandFactory<ChatItemProps>
  static displayName = 'ChatItem'
  static slotClassNames: ChatItemSlotClassNames

  static propTypes = {
    ...commonPropTypes.createCommon({ content: false }),
    attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),
    gutter: customPropTypes.itemShorthand,
    contentPosition: PropTypes.oneOf(['start', 'end']),
    message: customPropTypes.itemShorthand,
  }

  static defaultProps = {
    as: 'li',
    contentPosition: 'start',
    attached: false,
  }

  renderComponent({
    accessibility,
    ElementType,
    classes,
    unhandledProps,
    styles,
  }: RenderResultConfig<ChatItemProps>) {
    const { children } = this.props

    return (
      <ElementType
        {...rtlTextContainer.getAttributes({ forElements: [children] })}
        {...accessibility.attributes.root}
        {...unhandledProps}
        className={classes.root}
      >
        {childrenExist(children) ? children : this.renderChatItem(styles)}
      </ElementType>
    )
  }

  renderChatItem(styles: ComponentSlotStylesResolved) {
    const { gutter, contentPosition, message } = this.props
    const gutterElement =
      gutter &&
      Box.create(gutter, {
        defaultProps: () => ({ className: ChatItem.slotClassNames.gutter, styles: styles.gutter }),
      })

    const messageElement = Box.create(message, {
      defaultProps: () => ({
        className: ChatItem.slotClassNames.message,
        styles: styles.message,
      }),
    })

    return (
      <>
        {contentPosition === 'start' && gutterElement}
        {messageElement}
        {contentPosition === 'end' && gutterElement}
      </>
    )
  }
}

ChatItem.create = createShorthandFactory({ Component: ChatItem, mappedProp: 'message' })
ChatItem.slotClassNames = {
  message: `${ChatItem.className}__message`,
  gutter: `${ChatItem.className}__gutter`,
}

/**
 * A ChatItem is container for single entity in Chat (e.g. message, notification, etc).
 */
export default withSafeTypeForAs<typeof ChatItem, ChatItemProps, 'li'>(ChatItem)
