export const isSsr = () => typeof window !== "undefined"

export const generateAvatarName = (name: string, char = 2) => {
  const names = name.split(" ")
  const initials = names.map((n) => n[0]).join("")
  return initials.slice(0, char)
}
