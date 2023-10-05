import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SupportTicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
