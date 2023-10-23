import { DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from "@formkit/icons"
import "@formkit/themes/genesis"

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
}

export default config
