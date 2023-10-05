import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SupportTicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Details" multiline source="details" />
        <TextInput label="Email" source="email" type="email" />
        <SelectInput
          source="priority"
          label="Priority"
          choices={[
            { label: "High", value: "High" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Summary" source="subject" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
