export function submitHandler(callback) {
    return (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        const data = Object.fromEntries(
            [...formData].map(([key, value]) => [key, trimmer(value)])
        );

        function trimmer(value) {
            return value
                .split(' ')
                .filter((x) => x != '')
                .join(' ');
        }

        callback(data);
    };
}
