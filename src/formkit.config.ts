/* docs says:
 * Genesis for Pro is dependent on Genesis
 * If you are using Tailwind — the styles for Pro Inputs are already included in your base Genesis theme.
 * Do we still need to include the plain @formkit/themes/genesis theme?
 * Pro inputs seem to work fine with @formkit/themes/tailwindcss/genesis.
 * import "@formkit/themes/genesis"
 */
import { DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from "@formkit/icons"
import { generateClasses } from '@formkit/themes'
import { createProPlugin, inputs } from '@formkit/pro'
import tailwindcssGenesis from '@formkit/themes/tailwindcss/genesis'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs);
const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: {
    classes: generateClasses(tailwindcssGenesis),
  },
  plugins: [pro]
}

export default config
