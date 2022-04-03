import NextProgressBar from 'nextjs-progressbar';
import 'assets/styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<>
			<NextProgressBar
				color='#eb601e'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
  }
export default MyApp
