import {TextInput} from '@sanity/ui'

const Placeholder = (props) => {
  return <TextInput placeholder={props?.schemaType?.options?.placeholder} />
}

export default Placeholder