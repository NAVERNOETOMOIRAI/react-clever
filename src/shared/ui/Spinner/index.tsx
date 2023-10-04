import { Spinner as DefaultSpinner } from '@alfalab/core-components/spinner';
import './styles.scss'
import classNames from 'classnames';

type Props = {
    isInheritSize?: boolean;
}

export const Spinner = (props: Props) => {
    const {isInheritSize} = props;
    return <DefaultSpinner visible={true} className={classNames('spinner', {
        'spinner__inherit' : isInheritSize,
    })}/>
}