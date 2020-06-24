module.exports = {
    getProgress(string) {
        const progressRegexp1 = /\:[\s]+([\d]+) of ([\d]+)/;
        const progressMatch1 = string.match(progressRegexp1);
        if (progressMatch1) {
            const [, done, total] = progressMatch1;
            return { done, total };
        }

        const progressRegexp2 = /\: Exporting ([\d]+) of ([\d]+) records[\s]+/;
        const progressMatch2 = string.match(progressRegexp2);
        if (progressMatch2) {
            const [, done, total] = progressMatch2;
            return { done, total };
        }

        const progressRegexp3 = /\: Rearticulating ([\d]+) of ([\d]+) records[\s]+/;
        const progressMatch3 = string.match(progressRegexp3);
        if (progressMatch3) {
            const [, done, total] = progressMatch3;
            return { done, total };
        }

        const progressRegexp4 = /\: Reading ([\d]+) of ([\d]+) records[\s]+/;
        const progressMatch4 = string.match(progressRegexp4);
        if (progressMatch4) {
            const [, done, total] = progressMatch4;
            return { done, total };
        }
        return;
    }
};
