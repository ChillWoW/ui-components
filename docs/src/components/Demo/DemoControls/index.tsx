import {
    Switch,
    SelectInput,
    NumberInput,
    ColorPicker,
    RadioGroup,
    RadioGroupItem,
    Text
} from "@/components/ui";
import { DemoControl } from "@/types/demo";

interface DemoControlsProps {
    controls: DemoControl[];
}

export const DemoControls: React.FC<DemoControlsProps> = ({ controls }) => {
    return (
        <div className="space-y-4">
            {controls.map((control, index) => {
                switch (control.type) {
                    case "switch":
                        return (
                            <Switch
                                key={index}
                                label={control.label}
                                checked={control.value}
                                onChange={control.onChange}
                            />
                        );
                    case "select":
                        return (
                            <SelectInput
                                key={index}
                                label={control.label}
                                value={control.value}
                                onChange={control.onChange}
                                options={control.options || []}
                            />
                        );
                    case "number":
                        return (
                            <NumberInput
                                key={index}
                                label={control.label}
                                value={control.value}
                                onChange={control.onChange}
                                min={control.min}
                                max={control.max}
                            />
                        );
                    case "color":
                        return (
                            <ColorPicker
                                key={index}
                                label={control.label}
                                value={control.value}
                                format={control.format}
                                swatches={control.swatches}
                                onChange={control.onChange}
                            />
                        );
                    case "radio":
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <Text>{control.label}</Text>
                                <div className="bg-[#252627] rounded-lg p-5">
                                    <RadioGroup
                                        value={control.value}
                                        onChange={control.onChange}
                                    >
                                        {control.options?.map(
                                            (option, optionIndex) => (
                                                <RadioGroup.Item
                                                    key={optionIndex}
                                                    value={option.value}
                                                    label={option.label}
                                                />
                                            )
                                        )}
                                    </RadioGroup>
                                </div>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};
