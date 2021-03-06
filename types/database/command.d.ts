import { QueryCommand } from './commands/query';
import { LogicCommand } from './commands/logic';
import { UpdateCommand } from './commands/update';
export declare type IQueryCondition = Record<string, any> | LogicCommand;
export declare const Command: {
    eq(val: any): QueryCommand;
    neq(val: any): QueryCommand;
    lt(val: any): QueryCommand;
    lte(val: any): QueryCommand;
    gt(val: any): QueryCommand;
    gte(val: any): QueryCommand;
    in(val: any): QueryCommand;
    nin(val: any): QueryCommand;
    geoNear(val: any): QueryCommand;
    geoWithin(val: any): QueryCommand;
    geoIntersects(val: any): QueryCommand;
    and(...__expressions__: IQueryCondition[]): LogicCommand;
    or(...__expressions__: IQueryCondition[]): LogicCommand;
    set(val: any): UpdateCommand;
    remove(): UpdateCommand;
    inc(val: number): UpdateCommand;
    mul(val: number): UpdateCommand;
    push(...__values__: any[]): UpdateCommand;
    pop(): UpdateCommand;
    shift(): UpdateCommand;
    unshift(...__values__: any[]): UpdateCommand;
};
export default Command;
