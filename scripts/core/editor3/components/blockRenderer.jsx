import React from 'react';
import PropTypes from 'prop-types';
import {ImageBlock} from './images';
import {EmbedBlock} from './embeds';
import {TableBlock} from './tables';

/**
 * @ngdoc React
 * @module superdesk.core.editor3
 * @name MediaComponent
 * @param {Object} block The block being rendered.
 * @description Media block renderer component.
 */
const MediaComponent = (props) => {
    const {block, contentState} = props;
    const entityKey = block.getEntityAt(0);
    const type = contentState.getEntity(entityKey).getType();

    switch (type) {
    case 'IMAGE':
        return <ImageBlock {...props} />;
    case 'EMBED':
        return <EmbedBlock {...props} />;
    case 'TABLE':
        return <TableBlock {...props} />;
    default:
        return null;
    }
};

MediaComponent.propTypes = {
    block: PropTypes.object.isRequired,
    contentState: PropTypes.object.isRequired
};

export function blockRenderer(block) {
    return block.getType() !== 'atomic' ? null : {
        component: MediaComponent,
        editable: false
    };
}
