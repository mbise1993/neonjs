import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContactDetailsForm {
  id = '';

  @IsNotEmpty()
  name = '';

  @IsEmail({}, { message: 'Invalid email' })
  email = '';

  phone = '';
}
