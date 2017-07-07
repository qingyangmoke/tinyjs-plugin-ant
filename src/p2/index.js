import { default as World } from './world';

export * from './utils';

import * as Math from '../core/math';

import * as EVENTS from './EVENTS';

const p2 = require('./p2');

let system = null;
function startSystem(app, config) {
  if (system === null) {
    system = new World(app, config);
    app.onUpdate(function () {
      system && system.update();
    });
  } else {
    console.warn('物理系统已经启用了，请不要重复调用！');
  }
}

// const AABB = p2.AABB;
// const Capsule = p2.Capsule;
// const Circle = p2.Circle;
// const Convex = p2.Convex;
// const EventEmitter = p2.EventEmitter;

// const Material = p2.Material;
// const ContactMaterial = p2.ContactMaterial;

// const Constraint = p2.Constraint;
// const RevoluteConstraint = p2.RevoluteConstraint;
// const GearConstraint = p2.GearConstraint;
// const DistanceConstraint = p2.DistanceConstraint;
// const PrismaticConstraint = p2.PrismaticConstraint;
// const LockConstraint = p2.LockConstraint;

// const Equation = p2.Equation;
// const ContactEquation = p2.ContactEquation;
// const AngleLockEquation = p2.AngleLockEquation;
// const FrictionEquation = p2.FrictionEquation;
// const FrictionEquationPool = p2.FrictionEquationPool;
// const RotationalVelocityEquation = p2.RotationalVelocityEquation;

// const Pool = p2.Pool;
// const ContactEquationPool = p2.ContactEquationPool;

// const Solver = p2.Solver;
// const GSSolver = p2.GSSolver;

// const Heightfield = p2.Heightfield;

// const Broadphase = p2.Broadphase;
// const Narrowphase = p2.Narrowphase;
// const NaiveBroadphase = p2.NaiveBroadphase;
// const SAPBroadphase = p2.SAPBroadphase;

// const Particle = p2.Particle;
// const Plane = p2.Plane;

// // const Utils = p2.Utils;
// // const World = p2.World;
// const Line = p2.Line;
// const vec2 = p2.vec2;

// const Ray = p2.Ray;
// const RaycastResult = p2.RaycastResult;

// const Box = p2.Box;
// const Spring = p2.Spring;
// const LinearSpring = p2.LinearSpring;
// const RotationalSpring = p2.RotationalSpring;

// const TopDownVehicle = p2.TopDownVehicle;

export {
  startSystem,
  Math,
  EVENTS,
  p2,

  // AABB,
  // Capsule,
  // Circle,
  // Convex,
  // EventEmitter,

  // Material,
  // ContactMaterial,

  // Constraint,
  // RevoluteConstraint,
  // GearConstraint,
  // DistanceConstraint,
  // PrismaticConstraint,
  // LockConstraint,

  // Equation,
  // ContactEquation,
  // AngleLockEquation,
  // FrictionEquation,
  // FrictionEquationPool,
  // RotationalVelocityEquation,

  // Pool,
  // ContactEquationPool,

  // Solver,
  // GSSolver,

  // Heightfield,

  // Broadphase,
  // Narrowphase,
  // NaiveBroadphase,
  // SAPBroadphase,

  // Particle,
  // Plane,

  // Line,
  // vec2,

  // Ray,
  // RaycastResult,

  // Box,
  // Spring,
  // LinearSpring,
  // RotationalSpring,

  // TopDownVehicle,

};
