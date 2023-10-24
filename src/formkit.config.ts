import { DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from "@formkit/icons"
import { generateClasses } from '@formkit/themes'
import tailwindcssGenesis from '@formkit/themes/tailwindcss/genesis'

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: {
    classes: generateClasses(tailwindcssGenesis),
  },
}

export default config
