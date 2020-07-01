describe('The question list', () => {
    it('Should tell me the meaning of life', () => {
        expect(40 + 2).toEqual(42);
    });

    it('Should display the expected result', () => {
        expect(42 + 2).toBe(44);
    });

    it('Should test async', done => {
        setTimeout(() => {
            done();
        }, 200);
    });

    it('Should test with a promise', () => {
        return new Promise(resolve => setTimeout(() => {
            resolve('done resolving');
        }, 200));
    });
});