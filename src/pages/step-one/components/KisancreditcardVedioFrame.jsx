import React from 'react';
import { Card } from 'antd'
import { ControlBar, Player } from 'video-react';
import { logStepMessage } from '../../../constants/variableConst';
import { addEvents } from '../../../service/kisancreditcardServiceApi';
import Content from "../../../constants/Content.json"

const KisancreditcardVedioFrame = ({ param, language }) => {
    const handlePlay = () => {
        const logData = {
            ...param,
            "step": logStepMessage.FOURTEEN.STEPID,
            "stepText": logStepMessage.FOURTEEN.STEPTEXT,
        }
        addEvents(logData)
    }
    return (
        <div className='sub-video-header sub-video-header--modified'>
            <Card hoverable>
                <div className='video-box'>
                    <Player
                        playsInline
                        src={`${process.env.PUBLIC_URL}/assets/video/goldloan_video_${Content[language]['tag']}.mp4`}
                        onPlay={handlePlay}
                        poster={`${process.env.PUBLIC_URL}/assets/img/video_poster/poster_${Content[language]['tag']}.png`}
                    >
                        <ControlBar autoHide={true} />
                    </Player>
                </div>
            </Card>
        </div>
    );
};

export default KisancreditcardVedioFrame;


