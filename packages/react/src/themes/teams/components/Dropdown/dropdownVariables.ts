import { pxToRem } from '../../../../utils'

export interface DropdownVariables {
  backgroundColor: string
  backgroundColorHover: string
  backgroundColorInverted: string
  borderColor: string
  borderColorHover: string
  borderColorFocus: string
  borderWidth: string
  containerBorderRadius: string
  openAboveContainerBorderRadius: string
  openBelowContainerBorderRadius: string
  searchBorderBottomWidth: string
  color: string
  comboboxPaddingButton: string
  comboboxFlexBasis: string
  aboveListBorderRadius: string
  belowListBorderRadius: string
  listBackgroundColor: string
  listBorderColor: string
  listBorderWidth: string
  listPadding: string
  listBoxShadow: string
  listMaxHeight: string
  listItemFocusBorderWidth: string
  listItemHeaderFontSize: string
  listItemHeaderColor: string
  listItemContentFontSize: string
  listItemContentColor: string
  listItemBackgroundColor: string
  listItemColorHover: string
  listItemBackgroundColorHover: string
  listItemBackgroundColorActive: string
  listItemColorActive: string
  listItemSelectedFontWeight: number
  listItemSelectedColor: string
  selectedItemColor: string
  selectedItemColorHover: string
  selectedItemBackgroundColor: string
  selectedItemBackgroundColorHover: string
  selectedItemIconColor: string
  selectedItemIconColorHover: string
  selectedItemsMaxHeight: string
  toggleIndicatorSize: string
  width: string
  overlayZIndex: number
}

const [cornerRadius, _12px_asRem] = [3, 12].map(v => pxToRem(v))

export default (siteVars): DropdownVariables => ({
  backgroundColor: siteVars.colorScheme.default.background2,
  backgroundColorInverted: siteVars.colorScheme.default.background,
  backgroundColorHover: siteVars.colorScheme.default.background3,
  borderColor: 'transparent',
  borderColorHover: 'transparent',
  borderColorFocus: siteVars.colorScheme.brand.borderFocus1,
  borderWidth: '0',
  color: siteVars.colorScheme.default.foreground1,
  containerBorderRadius: `${cornerRadius}`,
  openAboveContainerBorderRadius: `0 0 ${cornerRadius} ${cornerRadius}`,
  openBelowContainerBorderRadius: `${cornerRadius} ${cornerRadius} 0 0`,
  searchBorderBottomWidth: pxToRem(2),
  selectedItemColor: siteVars.colorScheme.default.foreground,
  comboboxPaddingButton: `0 ${_12px_asRem}`,
  comboboxFlexBasis: pxToRem(50),
  aboveListBorderRadius: `${cornerRadius} ${cornerRadius} 0 0`,
  belowListBorderRadius: `0 0 ${cornerRadius} ${cornerRadius}`,

  listBackgroundColor: siteVars.colorScheme.default.background,
  listBorderColor: 'transparent',
  listBorderWidth: '0',
  listPadding: `${pxToRem(8)} 0 ${pxToRem(6)}`,
  listBoxShadow: siteVars.shadowLevel3,
  listMaxHeight: pxToRem(296),
  listItemFocusBorderWidth: pxToRem(1),
  listItemBackgroundColor: 'transparent',
  listItemBackgroundColorHover: siteVars.colorScheme.default.backgroundHover,
  listItemBackgroundColorActive: siteVars.colorScheme.default.backgroundActive,
  listItemColorActive: siteVars.colorScheme.default.backgroundFocus3,
  listItemColorHover: siteVars.colorScheme.default.foregroundHover,
  listItemSelectedColor: siteVars.colorScheme.default.foreground,
  listItemSelectedFontWeight: siteVars.fontWeightSemibold,

  selectedItemBackgroundColor: siteVars.colorScheme.default.background,
  selectedItemBackgroundColorHover: siteVars.colorScheme.brand.background1,
  selectedItemColorHover: siteVars.colorScheme.default.foreground,
  selectedItemIconColor: siteVars.colorScheme.default.foreground1,
  selectedItemIconColorHover: siteVars.colorScheme.brand.foregroundHover,

  selectedItemsMaxHeight: pxToRem(82),

  toggleIndicatorSize: pxToRem(32),
  width: pxToRem(356),
  overlayZIndex: siteVars.zIndexes.overlay,

  // these should only apply when there is content in the image/media slot:
  listItemHeaderFontSize: siteVars.fontSizes.medium,
  listItemHeaderColor: siteVars.colorScheme.default.foreground1,
  listItemContentFontSize: siteVars.fontSizes.small,
  listItemContentColor: siteVars.colorScheme.default.foreground2,
})
