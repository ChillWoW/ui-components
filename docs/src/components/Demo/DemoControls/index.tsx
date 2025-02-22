import { Switch, SelectInput, RadioGroup, NumberInput } from "@/components/ui";
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
                    default:
                        return null;
                }
            })}
        </div>
    );
};
