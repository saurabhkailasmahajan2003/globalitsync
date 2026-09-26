export const CONTACT_PHONES = ['9763684771', '9527352323']

export const CONTACT_EMAIL = ''

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/globalitsync-com/',
  instagram: 'https://www.instagram.com/globalitsync.tech',
  facebook: 'https://www.facebook.com/share/1Bg4m8eWBA/',
  whatsapp: 'https://wa.me/353892550760',
}

export const SOCIAL_PROFILES = [
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.facebook,
]

export function formatPhone(phone) {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`
}
