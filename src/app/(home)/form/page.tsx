import Form1 from "@/components/form/form1";
import Form2 from "@/components/form/form2";
import Form3 from "@/components/form/form3";
import Form4 from "@/components/form/form4";
import Form5 from "@/components/form/form5";
import Form6 from "@/components/form/form6";
import Form7 from "@/components/form/form7";
import Form8 from "@/components/form/form8";
import Form9 from "@/components/form/form9";
import { FormProvider } from "@/context/formValueContext";
import React from "react";

function page() {
  return (
    <div>
      <FormProvider>
        <Form1></Form1>
        <Form2></Form2>
        <Form3></Form3>
        <Form4></Form4>
        <Form5></Form5>
        <Form6></Form6>
        <Form7></Form7>
        <Form8></Form8>
        <Form9></Form9>
      </FormProvider>
    </div>
  );
}

export default page;
