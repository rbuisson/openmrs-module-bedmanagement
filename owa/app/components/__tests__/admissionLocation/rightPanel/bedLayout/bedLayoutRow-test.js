import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';

import BedLayoutRow from 'components/admissionLocation/rightPanel/bedLayout/bedLayoutRow';
import admissionLocationFunctions from 'components/__mocks__/admissionLocationFunctions-mock';
import messages from 'i18n/messages';

const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    props: {
        admissionLocationFunctions: admissionLocationFunctions,
        loadAdmissionLocationLayout: (locationUuid) => jest.fn(),
        rowBeds: [
            null,
            {
                bedId: 9,
                bedNumber: '306-a',
                bedType: {
                    description: 'deluxe',
                    displayName: 'Double',
                    id: 3
                },
                name: 'double',
                bedUuid: 'bb0a43db-d225-11e4-9c67-080027b662ec',
                columnNumber: 1,
                rowNumber: 2,
                status: 'AVAILABLE'
            },
            {
                bedId: null,
                bedNumber: null,
                bedType: null,
                bedUuid: null,
                columnNumber: 2,
                rowNumber: 2,
                status: null
            },
            {
                bedId: 10,
                bedNumber: '306-c',
                bedType: {
                    name: 'deluxe',
                    description: 'deluxe',
                    displayName: 'DLX',
                    id: 1
                },
                bedUuid: '4a83f079-6859-447a-aec7-e54b98ca8a73',
                columnNumber: 3,
                rowNumber: 2,
                status: 'AVAILABLE'
            }
        ]
    },
    context: {
        intl: intl
    }
};

describe('BedLayoutRow', () => {
    it('Should render bed layout properly', () => {
        const bedLayoutRow = shallow(
            <BedLayoutRow
                admissionLocationFunctions={testData.props.admissionLocationFunctions}
                row={2}
                layoutRow={3}
                layoutColumn={3}
                rowBeds={testData.props.rowBeds}
                loadAdmissionLocationLayout={testData.props.loadAdmissionLocationLayout}
            />,
            {context: testData.context}
        );

        expect(bedLayoutRow.find('BedBlock').length).toBe(3);
        expect(shallowToJson(bedLayoutRow)).toMatchSnapshot();

        expect(bedLayoutRow.find('BedBlock').length).toBe(3);
        expect(shallowToJson(bedLayoutRow)).toMatchSnapshot();
    });
});
