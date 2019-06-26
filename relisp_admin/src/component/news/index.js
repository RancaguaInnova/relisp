import React from 'react'
import RichTextInput from 'ra-input-rich-text'

import {
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  SimpleForm,
  UrlField,
  SingleFieldList,
  TextInput,
  ImageField,
  ImageInput,
  ArrayField
} from 'react-admin'

const validateUserCreation = values => {
  const errors = {}
  if (!values.title) {
    errors.title = ['El título de la  noticia es requerido']
  }
  if (!values.body) {
    errors.body = ['El cuerpo de la noticia es requerido']
  }
  return errors
}

export const NewsList = props => (
  <List {...props} label='Noticias' title='Noticias'>
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Sub Título' />
      <RichTextField source='body' label='Cuerpo' />
      <UrlField source='externalUrl' label='Url' />
      <DateField source='publicationDate' label='Fecha de publicación' />
      <DateField source='lastupdate' label='Ultima actualización' />
    </Datagrid>
  </List>
)

export const NewsCreate = props => (
  <Create {...props} label='Noticias' title='Noticias'>
    <SimpleForm validate={validateUserCreation}>
      <TextInput source='title' label='Título' />
      <TextInput source='subtitle' label='Sub Título' />
      <RichTextInput
        allowEmpty
        emptyValue=''
        source='body'
        label='Cuerpo'
        toolbar={[['bold', 'italic', 'underline', 'link']]}
      />
      <TextInput source='externalUrl' label='Url' type='url' />
      <ImageInput source='picture' label='Imagen' accept='image/*' multiple>
        <ImageField source='src' title='title' />
      </ImageInput>
    </SimpleForm>
  </Create>
)
export const NewsEdit = props => (
  <Edit {...props} label='Noticias' title='Noticias'>
    <SimpleForm validate={validateUserCreation}>
      <TextInput source='title' label='Título' />
      <TextInput source='subtitle' label='Sub Título' />
      <RichTextInput
        allowEmpty
        emptyValue=''
        source='body'
        label='Cuerpo'
        toolbar={[['bold', 'italic', 'underline', 'link']]}
      />
      <TextInput source='externalUrl' label='Url' type='url' />
      <ImageInput source='picture' label='Imagen' accept='image/*' multiple>
        <ImageField source='src' title='title' />
      </ImageInput>
    </SimpleForm>
  </Edit>
)

export const NewsShow = props => (
  <Show {...props} label='Noticias' title='Noticias'>
    <SimpleShowLayout>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Sub Título' />
      <RichTextField source='body' label='Cuerpo' />
      <UrlField source='externalUrl' label='Url' />
      <ArrayField source='picture' label='Imagen'>
        <SingleFieldList>
          <ImageField source='src' />
        </SingleFieldList>
      </ArrayField>
      <DateField source='lastupdate' label='Fecha de ultima actualización' />
      <DateField source='publicationDate' label='Fecha de publicación' />
    </SimpleShowLayout>
  </Show>
)
