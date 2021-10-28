import {
    ToRememberContainer,
    ContactMin
} from './styled';

const ToRemember = () => {
    return (
        <ToRememberContainer>
            <h3>Para se lembrar</h3>
            <ContactMin>
                <div>
                    <img 
                        src={'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt={'Foto de usuário'} 
                    />
                </div>
                <span>Rodrigo</span>
            </ContactMin>
            <ContactMin>
                <div>
                    <img 
                        src={'https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt={'Foto de usuário'} 
                    />
                </div>
                <span>Sabrina</span>
            </ContactMin>
            <ContactMin>
                <div>
                    <img 
                        src={'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt={'Foto de usuário'} 
                    />
                </div>
                <span>Samantha</span>
            </ContactMin>
            <ContactMin>
                <div>
                    <img 
                        src={'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt={'Foto de usuário'} 
                    />
                </div>
                <span>Wellington</span>
            </ContactMin>
            <ContactMin>
                <div>
                    <img 
                        src={'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        alt={'Foto de usuário'} 
                    />
                </div>
                <span>Katarina</span>
            </ContactMin>
        </ToRememberContainer>
    );
}

export default ToRemember;