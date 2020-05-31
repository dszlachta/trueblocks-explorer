module.exports = {
    getProgress(string) {
        const progressRegexp = /\:[\s]+([\d]+) of ([\d]+)/;
        const progressMatch = string.match(progressRegexp);

        if (!progressMatch) return;

        const [, done, total] = progressMatch;
        return { done, total };
    }
};