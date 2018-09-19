import axios from 'axios'
const FORMS_API = process.env.GATSBY_FORMS_API

export default function formHandler(fields) {
  return axios({
    method: 'post',
    url: FORMS_API,
    data: fields,
  })
}
