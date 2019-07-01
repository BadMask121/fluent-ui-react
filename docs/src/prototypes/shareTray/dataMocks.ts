import { GridPickerItemProps } from './GridFilePicker/GridFilePickerItem'
import * as _ from 'lodash'

export const shareScreenText = 'Share screen '

export const screenshare = ['Desktop/Windows']

export const shareFileText = 'Share a file '
export const powerPoint = [
  'Instant Meetings.pptx',
  'Meeting Code.pptx',
  'Multi-window model meetings-calls.pptx',
  'Raise Hand - Meetings.pptx',
  'Raise Hand.pptx',
  'CSUN 2019 - recap.pptx',
  'Meetings LT review 5-2-2019.pptx',
  'Microsoft Teams CSUN 2019.pptx',
]

export const picker = [
  'ade',
  'chris',
  'christian',
  'daniel',
  'elliot',
  'helen',
  'jenny',
  'joe',
  'justen',
  'laura',
  'matt',
  'nan',
  'nom',
  'stevie',
  'steve',
  'tom',
  'veronika',
]

export const shareText = 'Share '
export const whiteBoard = ['Microsoft Whiteboard', 'Invision Whiteboard']

export const getItemsData = (
  fileNames: string[],
  ariaLabelPart: string,
  icon: string,
  role?: string,
  roleDescription?: string,
  wrapperRole?: string,
  positions?: boolean,
) => {
  const count = fileNames.length
  let index = 0
  return _.map(fileNames, fileName => {
    const props = {
      title: `${ariaLabelPart}${fileName}`,
      onClick: e => {
        alert(`Selected ${fileName}`)
      },
      fileName,
      icon,
      backgroundColor: icon === 'star' ? '#f36' : undefined,
      role,
      roleDescription,
      wrapperRole,
      ...(positions && { positionSuffix: ` ${++index} of ${count}` }),
    } as GridPickerItemProps
    return props
  })
}