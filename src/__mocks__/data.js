import { readFileSync } from 'fs'

import path from 'path'

export const data = JSON.parse(
	readFileSync(path.join(__dirname, 'api.json')).toString()
)
