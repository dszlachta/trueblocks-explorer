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
        if (!progressMatch2)
            return;
            
        const [, done, total] = progressMatch2;
        return { done, total };
    }
};
