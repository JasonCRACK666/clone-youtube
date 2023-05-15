import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
}

export interface MainLink {
  path: string
  name: string
  IconFill: IconType
  IconOut: IconType
}
