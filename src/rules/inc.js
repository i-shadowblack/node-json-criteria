export default {
    conditions: {
        $inc: function (d, q) {
            for (let [key, value] of Object.entries(q)) {
                if (d.hasOwnProperty(key) && typeof d[key] === 'number' && typeof value === 'number') {
                    d[key] += value;
                }
            }
            return true;
        },
    }
}
