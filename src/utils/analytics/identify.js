import addHubspotContact from '../forms/hubspot'

export default function identify(id, profile) {
  if (!profile) {
    return false
  }
  const data = {
    // auth0 id
    id: id,
    // Email of the currently signed in user.
    email: profile.email,
    // unix timestamp
    created_at: Math.round(+new Date(profile.created_at) / 1000),
    // set name
    ...getNameData(profile),
    // set company data
    ...getCompanyName(profile)
  }
  // set picture
  if (profile.picture) {
    data.picture = profile.picture
  }
  // set location
  if (profile.location) {
    data.location = profile.location
  }
  // set login_count
  if (profile.login_count) {
    data.login_count = profile.login_count
  }

  // set frameworkId
  if (profile.frameworkId) {
    data.frameworkId = profile.frameworkId
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('identify', data) // eslint-disable-line
    return false
  }

  // Send data to Customer.io . imits https://learn.customer.io/api/#api-documentationlimits
  if (typeof _cio !== 'undefined') {
     _cio.identify(data) // eslint-disable-line
  }

  // Send data to hubspot
  if (process.env.GATSBY_ADD_CONTACT_API) {
    addHubspotContact(data).then((hsResponse) => {
      // get hubspot data
      // console.log('hsResponse', hsResponse)
    })
  }
}

function getNameData(profile) {
  if (!profile) {
    return null
  }
  const nameData = {}

  if (profile.name && typeof profile.name === 'string' && !profile.name.match(/@/)) {
    const name = profile.name.split(' ')
    if (name[0]) {
      nameData.first_name = name[0]
    }
    if (name[1]) {
      nameData.last_name = name[1]
    }
    if (name[0] && name[1]) {
      nameData.full_name = `${name[0]} ${name[1]}`
    }
  }

  const meta = profile.user_metadata
  if (meta && meta.fullcontact && meta.fullcontact.contactInfo) {
    if (meta.fullcontact.contactInfo.givenName) {
      nameData.first_name = meta.fullcontact.contactInfo.givenName
    }
    if (meta.fullcontact.contactInfo.familyName) {
      nameData.last_name = meta.fullcontact.contactInfo.familyName
    }
    if (meta.fullcontact.contactInfo.fullName) {
      nameData.full_name = meta.fullcontact.contactInfo.fullName
    }
  }
  return nameData
}


function getCompanyName(profile) {
  if (!profile) {
    return {}
  }
  if (profile.company && typeof profile.company === 'string') {
    const company = profile.company.trim().replace(/^@/, '')
    return {
      company
    }
  }
  const meta = profile.user_metadata
  if (meta && meta.fullcontact && meta.fullcontact.organizations) {
    const companyInfo = meta.fullcontact.organizations.filter((org) => { // eslint-disable-line
      if (org.isPrimary) {
        return org
      }
    })

    if (companyInfo && companyInfo[0] && companyInfo[0].name) {
      return {
        company: companyInfo[0].name.trim()
      }
    }
  }
}
