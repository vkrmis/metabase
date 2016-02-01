import React, { Component, PropTypes } from "react";

import CardRenderer from "./CardRenderer.jsx";

import { isString } from "metabase/lib/schema_metadata";

import { MinColumnsError } from "./errors";

export default class USStateMap extends Component {
    static displayName = "US State Map";
    static identifier = "state";
    static iconName = "statemap";

    static isSensible(cols, rows) {
        return cols.length > 1 && isString(cols[0]);
    }

    static checkRenderable(cols, rows) {
        if (cols.length < 2) { throw new MinColumnsError(2, cols.length); }
    }

    render() {
        return (
            <CardRenderer className="flex-full" {...this.props} />
        );
    }
}
