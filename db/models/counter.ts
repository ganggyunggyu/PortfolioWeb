import mongoose, { models, Schema } from 'mongoose';

export const CounterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const Counter = models?.Counter || mongoose.model('Counter', CounterSchema);

export async function getNextSequenceValue(sequenceName: string) {
  const sequenceDocument = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
  );

  return sequenceDocument.seq;
}

export async function decreaseSequenceValue(sequenceName: string) {
  try {
    const sequenceDocument = await Counter.findOneAndUpdate(
      { _id: sequenceName, seq: { $gt: 0 } }, // 조건: 시퀀스가 0보다 큰 경우에만 감소
      { $inc: { seq: -1 } }, // 시퀀스 값을 1 감소
      { new: true, upsert: true },
    );

    if (!sequenceDocument) {
      throw new Error('시퀀스를 찾을 수 없거나 시퀀스가 0 이하입니다.');
    }

    return sequenceDocument.seq;
  } catch (error) {
    throw error;
  }
}

export default Counter;
