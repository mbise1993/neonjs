import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class ContactDetailsForm {
  @Min(1)
  id = 0;

  @IsNotEmpty()
  name = '';

  @IsEmail({}, { message: 'Invalid email' })
  email = '';

  phone = '';
}
