import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import React from 'react';
import renderer from 'react-test-renderer';

describe('The Question Detail Component', () => {
    describe('The mapStateToProps function', () => {
        it('should map the state values as props correctly', () => {
            const sampleQuestion = {
                question_id: 42,
                body: 'Space is really big'
            };
            const appState = {
                questions: [sampleQuestion]
            };
            const ownProps = {
                question_id: 42
            };

            const componentState = mapStateToProps(appState, ownProps);
            expect(componentState).toEqual(sampleQuestion);
        });
    });

    it('Should not regress', () => {
        const tree = renderer.create(
            <QuestionDetailDisplay
                title={'The meaning of life'}
                body={'42'}
                answer_count={0}
                tags={['hitchhiking', 'something', 'somethingElse']}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});