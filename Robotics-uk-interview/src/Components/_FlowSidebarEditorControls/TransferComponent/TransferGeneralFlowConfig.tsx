import React, { useState } from "react";
import "./TransferGeneralFlowConfig.scss";
import FlowSidebarTextInput from "../../FlowSidebarComponents/FlowSidebarTextInput/FlowSidebarTextInput";
import FlowSidebarToggle from "../../FlowSidebarComponents/FlowSidebarToggle/FlowSidebarToggle";

const TransferGeneralFlowConfig = () => {
  const [objectName, setObjectName] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [sourceLocation, setSourceLocation] = useState<string>("");
  const [destinationLocation, setDestinationLocation] = useState<string>("");
  const [readBarcode, setReadBarcode] = useState<boolean>(false);
  const [ignoreBarcodeFailure, setIgnoreBarcodeFailure] = useState<boolean>(false);

  return (
    <div>
      <FlowSidebarTextInput
        value={objectName}
        setValue={setObjectName}
        label="Object Name"
        tooltip="Used to specify the piece of labware that should be moved."
      />
      <Divider />
      <FlowSidebarTextInput
        value={priority}
        setValue={setPriority}
        label="Transfer Priority"
        tooltip="The priority of the transfer which is used to control contention for robots, slides and other transfer devices."
      />
      <Divider />
      <FlowSidebarTextInput
        value={sourceLocation}
        setValue={setSourceLocation}
        label="Source Location"
        tooltip="Specifies if the transfer should transfer the object from its current location."
      />
      <Divider />
      <FlowSidebarTextInput
        value={destinationLocation}
        setValue={setDestinationLocation}
        label="Destination"
        tooltip="Specifies if the destination for the transfer."
      />
      <Divider />
      <FlowSidebarToggle
        active={readBarcode}
        setActive={setReadBarcode}
        label="Read Bar Code"
        subtitle="Read the barcode of the object that is being transfered."
        tooltip="Specifies if the barcode of the object being transferred should be read."
      />
      <Divider />
      <FlowSidebarToggle
        active={ignoreBarcodeFailure}
        setActive={setIgnoreBarcodeFailure}
        label="Ignore Bar Code Failure"
        subtitle="This property indicates if the component should ignore any bar code read errors."
        tooltip="This property indicates if the component should ignore any bar code read errors."
      />
    </div>
  );
};

const Divider = () => {
  return (
    <div
      style={{
        height: "25px",
      }}
    />
  );
};

export default TransferGeneralFlowConfig;
