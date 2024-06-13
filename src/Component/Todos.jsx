import style from '../Component/App.module.css'
export default function Todos({ todo }) {
    return (
            
        <div className='App'> {todo?.map(todo => {
            return (
                <div className={style.des}>

                    <table>
                        <tr>
                            <th className={style.name}>Name</th>
                            <th className={style.email}>email</th>
                            <th className={style.username}>username</th>
                        </tr>


                        <tr>
                            <td>  <div className={style.line} key={todo.id}> {todo.name}

                            </div>   </td>
                            <td><div className={style.line} >
                                {todo.email}
                            </div> </td>
                            <td>
                                <div className={style.line} >
                                    {todo.username}
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>

            )
        }
        
    )
    

        }

        </div>
    )
}
