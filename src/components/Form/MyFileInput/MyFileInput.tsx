import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyFileInput';

const MyFileInput: FC<IInputProps> = ({ register, errors }) => {
  function isValidFile(files: FileList) {
    const typeFile = files[0].type;
    if (typeFile === 'image/jpeg' || typeFile === 'image/png') {
      return true;
    }
    return false;
  }
  return (
    <div className={errors?.file ? 'input error' : 'input'}>
      <label htmlFor="file">Select file:</label>
      <input
        data-testid="file"
        id="file"
        type="file"
        accept="image/*"
        {...register('file', {
          required: 'Attach the image file',
          validate: (file) => isValidFile(file) || `Image file *jpeg or *png only accepted...`,
        })}
      />
      {errors?.file && <span>{errors?.file?.message || 'Error'}</span>}
    </div>
  );
};

export default MyFileInput;
