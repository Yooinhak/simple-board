import React from "react";
import { FormProvider } from "react-hook-form";
import styled from "styled-components";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn;
  onSubmit?: (data: any) => void;
  children: React.ReactNode;
}

const Component = ({ form, onSubmit, children }: Props) => {
  const handleSubmit = (data: any) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };
  return (
    <FormProvider {...form}>
      <Form onSubmit={form.handleSubmit(handleSubmit)}>{children}</Form>
    </FormProvider>
  );
};

const Form = styled.form``;

export default Component;
