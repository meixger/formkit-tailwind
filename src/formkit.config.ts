/* docs says:
 * Genesis for Pro is dependent on Genesis
 * If you are using Tailwind — the styles for Pro Inputs are already included in your base Genesis theme.
 * Do we still need to include the plain @formkit/themes/genesis theme?
 * Pro inputs seem to work fine with @formkit/themes/tailwindcss/genesis.
 * import "@formkit/themes/genesis"
 */
/* "The FormKit docs have been updated and the recommended way to install the Genesis theme is now to
 * copy/paste the theme object into your own project as a starting point.
 * In future releases the import object will no longer receive updates."
 * source: https://github.com/formkit/formkit/issues/787#issuecomment-1644147166
 * also: https://github.com/formkit/formkit/issues/560#issuecomment-1610301826
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
