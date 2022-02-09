import { useForm, useSelect, Create, Form, Select, Input } from "@pankod/refine-antd";
import { HttpError } from "@pankod/refine-core";
import { ICategory } from "src/interfaces";

export const CategoryCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<ICategory, HttpError>({});

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Title" name="title">
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
