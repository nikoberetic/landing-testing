import fs from 'fs'
import path from 'path'

// PROFILES_MD_PATH is useful when you want to get the path to a specific file
export const PROFILES_SOURCE_PATH = path.join(process.cwd(), 'public/profiles')
export const PROFILE_TTL = 3600

// profileFilePaths is the list of all mdx files inside the PROFILES_MD_PATH directory
export const profileFilePaths = ext => fs
  .readdirSync(PROFILES_SOURCE_PATH)
  // Only include md(x) files
  .filter((path) => new RegExp(`\.${ext}$`).test(path))

export const parseProfileFromSource = filePath => {
  const source = fs.readFileSync(path.join(PROFILES_SOURCE_PATH, filePath))
  return JSON.parse(source)
}