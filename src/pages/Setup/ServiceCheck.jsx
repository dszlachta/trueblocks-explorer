import React, { useState, useEffect } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';

export const ServiceCheck = ({
    performCheck, onPass, blockWizard, question, yesLabel = 'Yes', noLabel = 'No', extraFields = null, onCheck = () => { }
}) => {
    const [configureNow, setConfigureNow] = useState(true);
    const { errors, register, handleSubmit } = useForm();

    useEffect(() => {
        blockWizard(configureNow);
    });

    const onSubmit = (formData) => {
        blockWizard(false);
        onPass(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {question}
                <label>
                    <input
                        type="radio"
                        name="checkNode"
                        value={true}
                        checked={configureNow}
                        onChange={() => setConfigureNow(true)}
                    />
                    {yesLabel}
                </label>
                <label>
                    <input
                        type="radio"
                        name="checkNode"
                        value={false}
                        checked={!configureNow}
                        onChange={() => setConfigureNow(false)}
                    />
                    {noLabel}
                </label>
            </div>

            {!configureNow
                ? null
                : (
                    <div>
                        <label>
                            Host
                            <input
                                name="host"
                                ref={register({
                                    required: 'This field is required'
                                })}
                            />
                        </label>
                        <ErrorMessage name="host" errors={errors} />

                        <label>
                            Port
                            <input
                                name="port"
                                type="number"
                                ref={register({
                                    required: 'This field is required',
                                    pattern: {
                                        value: /[\d]{2,5}/,
                                        message: 'Port number should be at least two-digit number'
                                    }
                                })}
                            />
                        </label>
                        <ErrorMessage name="port" errors={errors} />

                        {extraFields}

                        <div>
                            <button
                                onClick={onCheck}
                            >
                                Check
                            </button>
                        </div>
                    </div>
                )
            }
        </form>
    );

}