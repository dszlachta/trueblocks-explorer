import React, { useEffect, useState } from 'react';

export const resultWaiting = 'waiting';
export const resultFailed = 'failed';
export const resultSuccess = 'success';

async function pingApi() {
    return fetch('//localhost:8080/ping', {
        method: 'head'
    });
}

export const Check = ({ retries, onCheckStarted, onCheckFinished }) => {
    const [result, setResult] = useState(resultWaiting);

    useEffect(() => {
        (async () => {
            onCheckStarted();

            try {
                const { status } = await pingApi();
                const success = status >= 200 && status < 300;
                const result = success ? resultSuccess : resultFailed;

                setResult(result);
                onCheckFinished(result);
            } catch (error) {
                setResult(resultFailed);
                onCheckFinished(resultFailed);
            }
        })();
    }, [retries, onCheckStarted, onCheckFinished]);

    return (
        <div>
            <span>
                Checking API...
            </span>
            <span>
                {result}
            </span>
        </div>
    );
};