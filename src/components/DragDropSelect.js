import React from 'react';
import propTypes from 'prop-types';

import DragAndDrop from './DragAndDrop';
import FileBrowser from './FileBrowser';

const DragDropSelect = props => {
  const {
    RDDBInputID,
    RDDBIconStyle,
    RDDBAcceptMultiple,
    RDDBIconComponent,
    RDDBDragDropHandler,
    RDDBFileBrowserHandler,
    RDDBFileBrowserDivClass,
    RDDBFileBrowserDivStyle,
    RDDBDisplayText,
    RDDBDisplayTextClass,
    RDDBAcceptFileTypes,
  } = props;

  return (
    <DragAndDrop RDDBFileDropHandler={RDDBDragDropHandler}>
      <FileBrowser
        RDDBInputID={RDDBInputID}
        RDDBIconStyle={RDDBIconStyle}
        RDDBAcceptMultiple={RDDBAcceptMultiple}
        RDDBIconComponent={RDDBIconComponent}
        RDDBDisplayText={RDDBDisplayText}
        RDDBDisplayTextClass={RDDBDisplayTextClass}
        RDDBFileBrowserHandler={RDDBFileBrowserHandler}
        RDDBFileBrowserDivClass={RDDBFileBrowserDivClass}
        RDDBFileBrowserDivStyle={RDDBFileBrowserDivStyle}
        RDDBAcceptFileTypes={RDDBAcceptFileTypes}
      />
    </DragAndDrop>
  );
};

DragDropSelect.propTypes = {
  RDDBInputID: propTypes.string,
  RDDBIconStyle: propTypes.object,
  RDDBAcceptMultiple: propTypes.bool,
  RDDBIconComponent: propTypes.func,
  RDDBDisplayText: propTypes.string,
  RDDBDisplayTextClass: propTypes.string,
  RDDBFileBrowserDivClass: propTypes.string,
  RDDBFileBrowserDivStyle: propTypes.object,
  RDDBDragDropHandler: propTypes.func.isRequired,
  RDDBFileBrowserHandler: propTypes.func.isRequired,
  RDDBAcceptFileTypes: propTypes.string,
};

export default DragDropSelect;
