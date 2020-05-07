import React from 'react'
import {TransitionProps} from '@material-ui/core/transitions/transition'
import {Slide} from '@material-ui/core'

const SlideUpTransition = React.forwardRef((
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />)

export default SlideUpTransition