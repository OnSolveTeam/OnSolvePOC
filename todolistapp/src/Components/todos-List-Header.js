import React from 'react'

export default class TodosListHeader extends React.Component{
    render(){
        return(<thead>
            <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Action</th>
            </tr>
            </thead>
        );
    }
}