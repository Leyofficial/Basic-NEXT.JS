import '@testing-library/jest-dom'
import {queryByRole, render, screen} from '@testing-library/react'
import HomePage from "../app/page";
import {List} from "@/components/List/List";

const data = ['html' , 'css' , 'js']

describe('Home page component', () => {
   it('list-render' , () => {
       render(<List items={data}/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
       expect(screen.getByText('html')).toBeInTheDocument();
   })
    it('list-render-without-data' , () => {
        render(<List items={[]}/>);
        expect(screen.queryByRole('list')).toBeNull();
    })
    it('snap-shot' , () => {
        const list = render(<List items={data}/>);

        expect(list).toMatchSnapshot();
    })
    it('empty-snap-shot' , () => {
        const list = render(<List items={[]}/>);

        expect(list).toMatchSnapshot();
    })
})