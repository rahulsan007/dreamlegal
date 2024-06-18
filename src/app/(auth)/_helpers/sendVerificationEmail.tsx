import { resend } from "@/lib/resend";
import VerificationEmail from "../../../../email/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  name: string,
  otp: string
) {
  try {
    await resend.emails.send({
      from: "email@dreamlegal.in",
      to: email,
      subject: "Dreamlegal Verification Code",
      react: VerificationEmail({ name, otp }),
    });
    return { success: true, msg: "Email sent" };
  } catch (error) {
    return { success: false, msg: error };
  }
}
