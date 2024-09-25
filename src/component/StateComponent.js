import React from 'react';

const SelectComponent = ({ groups, handleChange }) => {
    return (
        <select ng-model="text.animation.type"
            ng-change="updateAnimate('type',text.animation.type)"
            onChange={handleChange}
            id="aniChange"
            className="form-control form-control-sm ft_text_com">
            {groups.map((group, index) => (
                <optgroup key={index} label={group.label}>
                    {group.options.map((option, i) => (
                        <option key={i} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    );
};

export default SelectComponent;