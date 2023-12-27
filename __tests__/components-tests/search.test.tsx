import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react";
import { Search } from "@/components/Search/Search";
import userEvent from '@testing-library/user-event';


const onChange = jest.fn();

describe('Search component', () => {
    it('search render', () => {
        render(
            <Search value={''} onChange={onChange}>
                Find :
            </Search>
        );

        // Проверяем, что элемент найден (не является null)
        expect(screen.getByText(/find/i)).toBeTruthy();
    });
    it('renders without children' , () => {
        render(
            <Search value={''} onChange={onChange}/>
        );
        expect(screen.getByText(/search/i)).toBeInTheDocument();
    })
    it('render without placeholder ', () => {
        render(
            <Search value={''} onChange={onChange} />
        )
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
    });
    it('custom place holder works', () => {
        render(
            <Search value={''} onChange={onChange} placeholder={'custom placeholder'} />
        )
        expect(screen.getByPlaceholderText('custom placeholder')).toBeInTheDocument();
    });
    it('event on-change works', () => {
        render(
            <Search value={''} onChange={onChange} placeholder={'custom placeholder'} />
        )
        userEvent.type(screen.getByRole('textbox') , 'react');
        expect(onChange).toHaveBeenCalledTimes(5)
    });
});

