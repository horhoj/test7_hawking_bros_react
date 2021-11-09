import { FC } from 'react';
import { useFormik } from 'formik';
import { Input } from '../Input';
import { Button } from '../Button';
import { Select } from '../Select';
import { ErrorMsg } from '../ErrorMsg';
import { Feedback, FeedbackFormValidationSchema } from './types';

const INITIAL_VALUES: Feedback = {
  name: '',
  family: '',
  email: '',
  category: '',
  message: '',
  img: '',
};

export const FeedbackForm: FC = () => {
  const formik = useFormik<Feedback>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      const msg = JSON.stringify(values, null, 2);
      alert(msg);
    },
    validationSchema: FeedbackFormValidationSchema,
  });

  return (
    <div className="feedback-form__wrap">
      <h2 className="feedback-form__title">Форма обратной связи</h2>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        autoComplete={'off'}
        className="feedback-form"
      >
        <div className="feedback-form__elements-wrap">
          <div className="feedback-form__element">
            <Input
              label={'имя'}
              placeholder={'введите имя'}
              type={'text'}
              {...formik.getFieldProps('name')}
            />
            <ErrorMsg
              showError={
                Boolean(formik.touched.name) && Boolean(formik.errors.name)
              }
              error={formik.errors.name}
            />
          </div>
          <div className="feedback-form__element">
            <Input
              label={'фамилия'}
              placeholder={'введите фамилию'}
              type={'text'}
              {...formik.getFieldProps('family')}
            />
            <ErrorMsg
              showError={
                Boolean(formik.touched.family) && Boolean(formik.errors.family)
              }
              error={formik.errors.family}
            />
          </div>
        </div>
        <div className="feedback-form__elements-wrap">
          <div className="feedback-form__element">
            <Input
              label={'email'}
              placeholder={'введите имя'}
              type={'text'}
              {...formik.getFieldProps('email')}
            />
            <ErrorMsg
              showError={
                Boolean(formik.touched.email) && Boolean(formik.errors.email)
              }
              error={formik.errors.email}
            />
          </div>
          <div className="feedback-form__element">
            <Select
              label={'Категория'}
              placeholder={'выберите категорию'}
              {...formik.getFieldProps('category')}
            />
            <ErrorMsg
              showError={
                Boolean(formik.touched.category) &&
                Boolean(formik.errors.category)
              }
              error={formik.errors.category}
            />
          </div>
        </div>
        <div className="feedback-form__elements-wrap">
          <div className="feedback-form__element">
            <Input
              label={'сообщение'}
              placeholder={'введите сообщение'}
              type={'text'}
              {...formik.getFieldProps('message')}
            />
            <ErrorMsg
              showError={
                Boolean(formik.touched.message) &&
                Boolean(formik.errors.message)
              }
              error={formik.errors.message}
            />
          </div>
        </div>
        <div className="feedback-form__elements-wrap">
          <Input
            label={'выберите картинку'}
            placeholder={'выберите картинку'}
            type={'file'}
            value={''}
            name={''}
            onBlur={() => {}}
            onChange={() => {}}
          />
        </div>
        <div className="feedback-form__elements-wrap">
          <Button type={'submit'} caption={'Отправить'} />
        </div>
      </form>
    </div>
  );
};
